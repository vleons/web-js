<template>
  <div class="products-management">
    <!-- Форма добавления -->
    <div class="product-form card">
      <h2>Добавление продукта</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Название *</label>
          <input v-model="form.name" required class="form-control">
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>ID акции</label>
            <select v-model="form.sale_id" class="form-control">
              <option v-for="n in 4" :value="n" :key="n">{{ n }}</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Цена *</label>
            <input v-model="form.price" type="number" step="0.01" required class="form-control">
          </div>
        </div>

        <div class="form-group">
          <label>Описание</label>
          <textarea v-model="form.description" class="form-control"></textarea>
        </div>

        <div class="form-group">
          <label>Изображение</label>
          <div class="file-upload">
            <label class="file-upload-btn">
              <input type="file" @change="handleImageUpload" accept="image/*">
              {{ imageName || 'Выбрать файл' }}
            </label>
            <span class="file-info">{{ imageName ? 'Файл выбран' : 'файл не выбран' }}</span>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Добавить</button>
      </form>
    </div>

    <!-- Список продуктов -->
    <div class="product-list card">
      <div class="table-header">
        <h2>Список продуктов</h2>
        <div class="controls">
          <input 
            v-model="searchQuery" 
            placeholder="Поиск по названию..." 
            class="search-input"
          >
          <span class="items-count">Всего: {{ filteredProducts.length }}</span>
        </div>
      </div>

      <div class="table-responsive">
        <table class="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Изображение</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td>{{ product.id }}</td>
              <td>
                <img 
                  v-if="product.img" 
                  :src="product.img" 
                  :alt="product.name"
                  class="product-image"
                >
                <span v-else>—</span>
              </td>
              <td>{{ product.name }}</td>
              <td>{{ formatPrice(product.price) }}</td>
              <td class="actions">
                <button @click="editProduct(product)" class="btn-edit">
                  Изменить
                </button>
                <button @click="confirmDelete(product.id)" class="btn-delete">
                  Удалить
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Модальное окно редактирования -->
    <ProductEditModal
      v-if="editingProduct"
      :product="editingProduct"
      @save="handleSave"
      @close="editingProduct = null"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductEditModal from '@/components/ProductEditModal.vue'

export default {
  components: { ProductEditModal },
  data() {
    return {
      form: {
        name: '',
        sale_id: 1,
        description: '',
        price: 0,
        img: ''
      },
      imageName: '',
      searchQuery: '',
      editingProduct: null
    }
  },
  computed: {
    ...mapState('products', ['items']),
    products() {
      return this.items || []
    },
    filteredProducts() {
      const query = this.searchQuery.toLowerCase()
      return this.products.filter(p => 
        p.name.toLowerCase().includes(query)
      ).sort((a, b) => b.id - a.id) // Сортировка по ID (новые сверху)
    }
  },
  methods: {
    ...mapActions('products', ['createProduct', 'updateProduct', 'deleteProduct']),
    
    formatPrice(price) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2
      }).format(price)
    },
    
    handleImageUpload(e) {
      const file = e.target.files[0]
      if (file) {
        this.imageName = file.name
        this.form.img = URL.createObjectURL(file)
      }
    },
    
    async handleSubmit() {
      try {
        await this.createProduct(this.form)
        this.resetForm()
      } catch (error) {
        console.error('Ошибка создания:', error)
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        sale_id: 1,
        description: '',
        price: 0,
        img: ''
      }
      this.imageName = ''
    },
    
    editProduct(product) {
      this.editingProduct = { ...product }
    },
    
    confirmDelete(id) {
      if (confirm('Удалить этот продукт?')) {
        this.deleteProduct(id)
      }
    },
    
    async handleSave(updatedProduct) {
      try {
        await this.updateProduct(updatedProduct)
        this.editingProduct = null
      } catch (error) {
        console.error('Ошибка обновления:', error)
      }
    }
  },
  created() {
    this.$store.dispatch('products/load')
  }
}
</script>

<style scoped>
.products-management {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-row {
  display: flex;
  gap: 15px;
}

.form-row .form-group {
  flex: 1;
}

.file-upload {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-upload-btn {
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.file-upload-btn input {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.file-info {
  font-size: 13px;
  color: #666;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background: #42b983;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #3aa876;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 250px;
}

.items-count {
  font-size: 14px;
  color: #666;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
}

.products-table th, 
.products-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.products-table th {
  background: #f9f9f9;
  font-weight: 600;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}


.actions {
  display: flex;
  gap: 10px;
}

.btn-edit, .btn-delete {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
}

.btn-edit {
  background: #3498db;
  color: white;
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
}

.btn-delete {
  background: #e74c3c;
  color: white;
  box-shadow: 0 2px 4px rgba(231, 76, 60, 0.2);
}

.btn-edit:hover {
  background: #2980b9;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(52, 152, 219, 0.3);
}

.btn-delete:hover {
  background: #c0392b;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(231, 76, 60, 0.3);
}

.btn-edit:active, .btn-delete:active {
  transform: translateY(0);
}

</style>