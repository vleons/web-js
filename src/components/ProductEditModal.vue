<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Редактирование продукта</h3>
        <button @click="close" class="modal-close">&times;</button>
      </div>
      
      <div class="modal-body">
        <form @submit.prevent="saveChanges">
          <div class="form-group">
            <label>Название *</label>
            <input v-model="editedProduct.name" required class="form-control">
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>ID акции</label>
              <select v-model="editedProduct.sale_id" class="form-control">
                <option v-for="n in 4" :value="n" :key="n">{{ n }}</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Свойство</label>
              <select v-model="editedProduct.properties_id" class="form-control">
                <option v-for="property in properties" 
                        :value="property.id" 
                        :key="property.id">
                  {{ property.name }}
                </option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Цена *</label>
              <input v-model="editedProduct.price" type="number" step="0.01" required class="form-control">
            </div>
          </div>

          <div class="form-group">
            <label>Описание</label>
            <textarea v-model="editedProduct.description" class="form-control"></textarea>
          </div>

          <div class="modal-footer">
            <button type="button" @click="close" class="btn btn-secondary">
              Отмена
            </button>
            <button type="submit" class="btn btn-primary">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    properties: Array
  },
  data() {
    return {
      editedProduct: { ...this.product }
    }
  },
  methods: {
    saveChanges() {
      this.$emit('save', this.editedProduct)
    },
    close() {
      this.$emit('close')
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 600px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn-secondary {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background: #e5e5e5;
}

/* Копируем стили из ProductsPage для формы */
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
</style>