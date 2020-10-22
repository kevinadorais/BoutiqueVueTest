import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue ({
  data: {
    products: [
      {
        id: 1,
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16touch-space-gallery1-201911_GEO_FR?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1573165101555",
        title: "MacBook",
        description: "Avec le MacBook Pro, l’ordinateur portable atteint des sommets inédits en matière de performances et de portabilité.",
        price: 1455.00
      },
      {
        id: 2,
        img: "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/vivre/high-tech/sony-devoile-enfin-le-design-de-la-nouvelle-ps5-1689239/27548442-2-fre-FR/Sony-devoile-enfin-le-design-de-la-nouvelle-PS5.jpg",
        title: "Playstation 5",
        description: "La PS5 vous permet de découvrir une nouvelle génération de console. Elle se présente comme la console la plus performante développée à ce jour. Elle est disponible en deux versions et est compatible avec la majorité des jeux sortis sur la génération précédente. De nombreux titres sont proposés sur cette machine. ",
        price: 500.00
      },
      {
        id: 3,
        img: "https://www.cdiscount.com/pdt2/w/h/i/1/700x700/ps5dualsensewhi/rw/manette-ps5-dualsense-blanche-white-playstation.jpg",
        title: "Manette PS5 DualSense Blanche",
        description: "Découvrez une expérience de gaming plus intense1 qui porte l’action au creux de vos mains. La manette sans fil DualSense™ offre un immersif retour tactile2, des gâchettes adaptatives2 et un microphone intégré, tout cela dans un design confortable.",
        price: 69.99
      },
      {
        id: 4,
        img: "https://www.cdiscount.com/pdt2/4/7/1/1/700x700/auc7636490070471/rw/seagate-disque-dur-externe-expansion-portable.jpg",
        title: "SEAGATE - Disque Dur Externe - Expansion portable - 4To - USB 3.0",
        description: "Le disque dur portable Seagate Expansion est une solution simple qui peut se révéler très utile lorsque vous devez rapidement augmenter la capacité de stockage de votre ordinateur ou transporter vos fichiers lors de vos déplacements.",
        price: 135.00
      },
      {
        id: 5,
        img: "https://www.cdiscount.com/pdt2/3/7/2/1/700x700/samue49ru7372/rw/samsung-ue49ru7372-tv-led-4k-uhd-123-cm-49-e.jpg",
        title: "SAMSUNG UE49RU7372 TV LED 4K UHD 123 cm (49\")",
        description: "Ne ratez plus aucun détails avec votre nouveau téléviseur 4K UHD de Samsung. Grâce à la technologie HDR 10+ et l'expertise de Samsung, vivez des images pures et des sensations aussi proches de la réalité dans le scènes sombres comme dans les scènes les plus éclatantes.",
        price: 449.99
      },
      {
        id: 6,
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16touch-space-gallery1-201911_GEO_FR?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1573165101555",
        title: "MacBook",
        description: "Avec le MacBook Pro, l’ordinateur portable atteint des sommets inédits en matière de performances et de portabilité.",
        price: 1455.00
      },
      {
        id: 7,
        img: "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/vivre/high-tech/sony-devoile-enfin-le-design-de-la-nouvelle-ps5-1689239/27548442-2-fre-FR/Sony-devoile-enfin-le-design-de-la-nouvelle-PS5.jpg",
        title: "Playstation 5",
        description: "La PS5 vous permet de découvrir une nouvelle génération de console. Elle se présente comme la console la plus performante développée à ce jour. Elle est disponible en deux versions et est compatible avec la majorité des jeux sortis sur la génération précédente. De nombreux titres sont proposés sur cette machine. ",
        price: 500.00
      },
      {
        id: 8,
        img: "https://www.cdiscount.com/pdt2/w/h/i/1/700x700/ps5dualsensewhi/rw/manette-ps5-dualsense-blanche-white-playstation.jpg",
        title: "Manette PS5 DualSense Blanche",
        description: "Découvrez une expérience de gaming plus intense1 qui porte l’action au creux de vos mains. La manette sans fil DualSense™ offre un immersif retour tactile2, des gâchettes adaptatives2 et un microphone intégré, tout cela dans un design confortable.",
        price: 69.99
      },
      {
        id: 9,
        img: "https://www.cdiscount.com/pdt2/4/7/1/1/700x700/auc7636490070471/rw/seagate-disque-dur-externe-expansion-portable.jpg",
        title: "SEAGATE - Disque Dur Externe - Expansion portable - 4To - USB 3.0",
        description: "Le disque dur portable Seagate Expansion est une solution simple qui peut se révéler très utile lorsque vous devez rapidement augmenter la capacité de stockage de votre ordinateur ou transporter vos fichiers lors de vos déplacements.",
        price: 135.00
      },
      {
        id: 10,
        img: "https://www.cdiscount.com/pdt2/3/7/2/1/700x700/samue49ru7372/rw/samsung-ue49ru7372-tv-led-4k-uhd-123-cm-49-e.jpg",
        title: "SAMSUNG UE49RU7372 TV LED 4K UHD 123 cm (49\")",
        description: "Ne ratez plus aucun détails avec votre nouveau téléviseur 4K UHD de Samsung. Grâce à la technologie HDR 10+ et l'expertise de Samsung, vivez des images pures et des sensations aussi proches de la réalité dans le scènes sombres comme dans les scènes les plus éclatantes.",
        price: 449.99
      }
    ],
    cart: [

    ],
    page: "admin"
  },
  methods: {
    addProductToCart(product){
      if(!this.cart.map(i => i.id).includes(product.id)){
        this.cart = [ ...this.cart, product ];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    addProductToShop(product){
      this.products = [ ...this.products, { ...product, id: this.products.length + 1 + '' }],
      this.$emit('update:products', this.products);
    },
    removeItemFromCart(item){
      this.cart = this.cart.slice().filter(i => i.id !== item.id);
      this.$emit('update:cart', this.cart);
    },
    changePage(page){
      this.page = page;
      this.$emit('update:page', this.page)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
