// describe("title", function() {});
// 구현하고자 하는 기능에 대한 설명, it 블록을 한데 모아주는 역할
describe("pow", function() {
    // it("케이스 설명", function() {});
    // 설명은 누구나 읽을 수 있고 이해할 수 있도록
    // it 블록 하나 당 테스트 하나
    // assert 에서 에러 발생 시 해당 it 블록은 즉시 종료됨.
    // it.only를 사용하면, 원하는 it 블록만 테스트 실행해볼 수 있음.

    /** 테스트 추가하는 방법 **/
    // 1번. it 블록 내에 assert 추가
    it("주어진 숫자의 n 제곱", function() {
        assert.equal( pow(2, 3), 8 );
        assert.equal( pow(3, 4), 81 );
    });

    // 2번. it블록 추가(*추천*)
    it("2를 3번 곱하면 8", function() {
        assert.equal( pow(2, 3), 8 );
    });

    it("3을 4번 곱하면 81", function() {
        assert.equal( pow(3, 4), 81 );
    });


    /** 함수를 통한 테스트 반복문 **/
    function makeTest (x) {
        let expected = x * x * x;
        it(`${x}을 세 번 곱하면 ${expected}입니다.`, function (){
            assert.equal( pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }
});

/** 중첩 **/
describe("pow", function() {
    describe("x를 3번 곱한다.", function() {
        function makeTest (x) {
            let expected = x * x * x;
            it(`${x}을 세 번 곱하면 ${expected}입니다.`, function (){
                assert.equal( pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    describe("x를 5번 곱한다.", function() {
        function makeTest (x) {
            let expected = x * x * x * x * x;
            it(`${x}을 다섯 번 곱하면 ${expected}입니다.`, function (){
                assert.equal( pow(x, 5), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });


    describe("추가!", function() {
        it("n이 음수일 떄 결과는 NaN", function() {
            assert.isNaN( pow(2, -1) );
        });

        it("n이 정수가 아닐 떄 결과는 NaN", function() {
            assert.isNaN( pow(2, 1.5) );
        });
    });
});



describe("test", function() {
    // 보통 초기화 용도로 사용됨.
    before(() => console.log("테스트를 시작합니다 - 테스트가 시작되기 전"));
    after(() => console.log("테스트를 종료합니다 - 테스트가 종료된 후"));

    beforeEach(() => console.log("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
    afterEach(() => console.log("단일 테스트를 종료합니다 - 각 테스트 종료 후"));

    it('test 1', () => console.log(1));
    it('test 2', () => console.log(2));

    // before -> beforeEach -> it('test 1') 실행 -> afterEach
    // -> beforeEach -> it('test 2') 실행 -> afterEach -> after
});
