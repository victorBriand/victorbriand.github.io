var app = new Vue({
    el: "#app",
    data: {
        previous: null,
        current: '',
        operator: null,
        operatorClick: false,
    },
    methods:{
        clear(){
            this.current = '';
        },
        sign(){
            this.current = this.current.charAt(0) === '-' ?
                this.current.slice(1) : `-${this.current}`;
        },
        percent(){
            this.current = `${parseFloat(this.current) / 100}`
        },
        append(number){

            if(this.operatorClick){
                this.current = '';
                this.operatorClick = false;
            }
            this.current = `${this.current}${number}`;
        },
        dot(){
            if(this.current.indexOf('.') === -1){
                this.append('.');
            }
        },
        setPrevious(){
            this.previous = this.current
            this.operatorClick = true;
        },
        divide(){
            this.operator = (a, b) => a/b;
            this.setPrevious();
        },
        multiply(){
            this.operator = (a, b) => a*b;
            this.setPrevious();
        },
        minus(){
            this.operator = (a, b) => a-b;
            this.setPrevious();
        },
        plus(){
            this.operator = (a, b) => a+b;
            this.setPrevious();
        },
        equal(){
            this.current = `${
                this.operator(
                    parseFloat(this.previous),
                    parseFloat(this.current)
                )}`;
                this.previous = null;
        }
    }
})