<template>
  <div id="home">
    <img alt="MVTI logo" src="../assets/MVTI.png" />
    <br />
    <h1>MVTI 검사란?</h1>
    <br />
    <h2>MoVie Type-Indicator</h2>
    <h4>Made by iamkijun</h4>
    <br />
    <img
      src="https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/2cYQ/image/zgFUnsSpk5wb3-HLZWQxQR0n-Ng.png"
      alt="주디"
      style="height: 300px"
    />
    <img src="../assets/estj.png" alt="estj" style="height: 300px" />
    <br />
    <br />
    <h3>MBTI 성격유형으로 영화 취향으로 알아볼수 있는 재미있는 테스트</h3>
    <p>
      <button type="button" class="btn" @click="toQna">검사 시작하기</button>
    </p>
    <p>
      <button type="button" class="btn" @click="toResult">
        검사 결과 보러가기
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    toQna() {
      this.$router.push({ name: "qna" })
    },
    toResult() {
      this.$router.push({ name: "result" })
    },
  },
}
</script>
