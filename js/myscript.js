const { createApp } = Vue;

createApp ({
    data() {
        return {
            mail: ''
        }
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            const result = response.data;
            this.mail = result.response;
            });
    }
}) .mount('#app');