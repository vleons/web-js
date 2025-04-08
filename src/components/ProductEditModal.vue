<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Редактирование продукта</h3>
        <button @click="$emit('close')" class="modal-close">&times;</button>
      </div>
      
      <form @submit.prevent="handleSave">
        <div class="form-group">
          <label>Название</label>
          <input v-model="localProduct.name" required class="form-control">
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>ID акции</label>
            <select v-model="localProduct.sale_id" class="form-control">
              <option v-for="n in 4" :value="n" :key="n">{{ n }}</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Цена</label>
            <input 
              v-model="localProduct.price" 
              type="number" 
              step="0.01" 
              required 
              class="form-control"
            >
          </div>
        </div>

        <div class="form-group">
          <label>Описание</label>
          <textarea v-model="localProduct.description" class="form-control"></textarea>
        </div>

        <div class="form-group">
          <label>Изображение</label>
          <img 
            v-if="localProduct.img" 
            :src="localProduct.img" 
            class="current-image"
          >
          <input 
            type="file" 
            @change="handleImageUpload" 
            class="form-control"
          >
        </div>

        <div class="modal-actions">
          <button type="button" @click="$emit('close')" class="btn btn-cancel">
            Отмена
          </button>
          <button type="submit" class="btn btn-save">
            Сохранить изменения
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localProduct: { ...this.product }
    }
  },
  methods: {
    handleImageUpload(e) {
      const file = e.target.files[0]
      if (file) {
        this.localProduct.img = URL.createObjectURL(file)
      }
    },
    handleSave() {
      this.$emit('save', this.localProduct)
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 600px;
  max-width: 95%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

form {
  padding: 20px;
}

.current-image {
  display: block;
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.btn-cancel {
  background: #f5f5f5;
  color: #333;
}

.btn-save {
  background: #42b983;
  color: white;
}
</style>