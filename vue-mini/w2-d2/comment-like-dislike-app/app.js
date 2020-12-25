const app = Vue.createApp({
  data() {
    return {
      comments: [
        {
          id: '1',
          text:
            'Vue js yapısı gereği direk tarayıcı DOM’u üzerinde değişiklik yapmak yerinde virtual DOM üzerinde değişiklik yapar. Değişikliğin ardından virtual DOM ve tarayıcının DOM’u karşılaştırılarak sadece değişen kısımlar kullanıcıya gösterilir. Böylece daha performanslı bir sonuç üretilir.',
          like: 0,
          dislike: 0,
        },
        {
          id: '2',
          text:
            'Akla ilk gelen VUE’nin geliştiricinin ihtiyaçlarına göre adapte olabilmesidir. Diğer frameworkler tüm fonksiyonlar ile indirlip kullanılmak zorunda iken VUE sadece basit bir Script etiketi ile başlar. Ve ihtiyacınıza göre genişler.',
          like: 0,
          dislike: 0,
        },
        {
          id: '3',
          text:
            'UI tarafında kendine özgü bir syntaxı vardır. Açık kaynak olarak sunulan bu kütüphane hızla yayılmaktadır. Bu hızlı yükselişin tabi ki birden çok nedeni var. Bu nedenlerden bazıları kolay ve hızlı öğrenme, lightweight yapısı, projelere kolay entegre olması ve en önemlisi çok hızlı olması. Tarayıcının DOM’u ( Document Object Model) üzerinde değişiklik yapmak çok maliyetlidir. Bu nedenle Vue js virtual DOM kullanmaktadır.',
          like: 0,
          dislike: 0,
        },
      ],
    };
  },
}).mount('#app');
