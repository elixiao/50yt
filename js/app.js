var app = new Vue({
    el: '#app',
    data: {
        hiragana: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわいうえをん'.split(''),
        katakana: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤイユエヨラリルレロワイウエヲン'.split(''),
        pronunciation: 'a,i,u,e,o,ka,ki,ku,ke,ko,sa,shi,su,se,so,ta,chi,tsu,te,to,na,ni,nu,ne,no,ha,hi,fu,he,ho,ma,mi,mu,me,mo,ya,i,yu,e,yo,ra,ri,ru,re,ro,wa,i,u,e,o,n'.split(','),
        show: false,
        letter: '',
        partner: '',
        pinyin: ''
    },
    computed: {
        kana: function () {
            return this.hiragana.concat(this.katakana)
        }
    },
    methods: {
        next: function () {
            if (this.show) this.generate()
            else this.show = true
        },
        generate: function () {
            this.show = false
            var len = this.hiragana.length
            var i = Math.random() * 2 * len | 0
            this.letter = this.kana[i]
            if (i < len) {
                this.partner = this.kana[i + len]
                this.pinyin = this.pronunciation[i]
            } else {
                this.partner = this.kana[i - len]
                this.pinyin = this.pronunciation[i - len]
            }
        }
    },
    mounted: function () {
        this.generate();
    }
})