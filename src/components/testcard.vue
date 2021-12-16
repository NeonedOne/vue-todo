<template>
  <div class="testcard">
    <div class="testcardheader">
      <!-- <span class="testcardnumber">№X</span> -->
      <div class="testcardquestion">Question</div>
    </div>
    <div class="testcardbody">
      <button class="testcardbtn" id="option1">option1</button>
      <button class="testcardbtn" id="option2">option2</button>
      <button class="testcardbtn" id="option3">option3</button>
      <button class="testcardbtn" id="option4">option4</button>
    </div>
  </div>
</template>

<script type="text/javascript"></script>

<style>
.testcard {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #4d4d4d;
  background: white;

  margin: 1.5em 1.5em;
  padding-bottom: 0.75em;
}
.testcardheader {
  padding: 0.5em 1em;
}
.testcardquestion {
  font-size: 1.75em;
}
.testcardbody {
  display: flex;
  flex-wrap: wrap;
}
.testcardbtn {
  width: 100%;
  margin: 0.5em 1em;
  font-size: 1em;
  padding: 5px 1em;
  border: 2px solid transparent;
  background: #7f0000;
  color: white;
}
.testcardbtn:hover {
  background: black;
}

@media (max-width: 768px) {
  .testcard {
    margin: 1em 0em;
    font-size: 1.75em;
    width: 500px;
  }
  .testcardheader {
    padding: 0.5em 1em;
  }
  .testcardquestion {
    font-size: 1em;
  }
  .testcardbtn {
    margin: 0.5em 2em;
    font-size: 0.5em;
  }
}

@media (min-width: 1000px) {
  .testcard {
    width: 350px;
  }
}
</style>
