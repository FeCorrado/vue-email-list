new Vue({
  el: "#app",
  data: {
    emails: [],
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      this.getEmail();
    }
  },
  methods: {
      getEmail() {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
          if (!this.emails.includes(result.data.response)) {
            this.emails.push(result.data.response);
          } else {
              // l'email è duplicata
              this.getEmail();
          }
        });
      }
  }
});
