const { createApp } = Vue;

createApp ({
    data() {
        return {
            mailList: [],
            mailNumberInput: '',
            mailNumber: '',
            clickAudio: new Audio('audio/8bit.mp3'),
        }
    },
    methods: {
        getMailList() {
            this.clickAudio.currentTime = 0;
            this.clickAudio.play();
            this.mailNumber = this.mailNumberInput;
            this.mailList = [];
            for (i = 0; i < this.mailNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    this.mailList.push(result.response);
                });
            }
        },
        resetMailList() {
            this.clickAudio.currentTime = 0;
            this.clickAudio.play();
            this.mailList = [];
        }
    }
}) .mount('#app');