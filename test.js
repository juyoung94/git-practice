console.log("hello!");
let user_array = ["juyoung", "donghwa", "suhyung", "dongheok", "junkyu"];

class User {
    /**
     * @param name : 이름
     * @param type : 포지션
     * @param sex : 성별
     * */
    constructor (name, type, sex) {
        this.name = name;
        this.type = type;
        this.sex = sex;
    }
}

let juyoung = new User("juyoung", "FE", "F");
