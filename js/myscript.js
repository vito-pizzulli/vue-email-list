const { createApp } = Vue;

createApp ({
    data() {
        return {
            mailList: [],
            mailNumberInput: '',
            mailNumber: ''
        }
    },
    methods: {
        getMailList() {
            this.mailNumber = this.mailNumberInput;
            this.mailList = [];
            for (i = 0; i < this.mailNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    this.mailList.push(result.response);
                });
            }
        }
    }
}) .mount('#app');