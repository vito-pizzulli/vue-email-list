const { createApp } = Vue;

createApp ({
    data() {
        return {
            mailList: []
        }
    },
    created() {
        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            const result = response.data;
            this.mailList.push(result.response);
            });
        }
    }
}) .mount('#app');