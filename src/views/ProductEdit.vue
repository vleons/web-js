import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('products', ['createProduct', 'updateProduct']),
    async handleSubmit(productData) {
      try {
        if (this.isEditMode) {
          await this.updateProduct({ id: this.productId, ...productData });
        } else {
          await this.createProduct(productData);
        }
        this.$router.push({ name: 'Products' });
      } catch (error) {
        console.error('Ошибка сохранения:', error);
      }
    }
  }
}