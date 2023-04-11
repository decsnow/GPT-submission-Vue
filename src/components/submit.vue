<template>
  <div>
    <el-container>
      <el-header>训练语料提交系统</el-header>
      <el-main>

        <el-row :gutter="20">
          <el-col :span="12">
            <div id="que">问题：</div>
            <el-input type="textarea" :rows="18" placeholder="请输入问题内容" v-model="question">
            </el-input>
          </el-col>
          <el-col :span="12">
            <div id="ans">回答：</div>
            <el-input type="textarea" :rows="18" placeholder="请输入回答内容" v-model="answer">
            </el-input>
          </el-col>
        </el-row>
        <el-row id="but">
          <el-button type="primary" round id="butt" @click="submitbtn">提交语料</el-button>
        </el-row>

      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
//axios.defaults.withCredentials = true
import { Message } from 'element-ui'
export default {
  data() {
    return {
      question: '',
      answer: '',
    }
  },
  computed: {
    content() {
      return this.question + '\n' + this.answer
    },
  },
  methods: {
    async submitbtn() {
      //axios.defaults.withCredentials = true
      if (this.question == '') {
        Message.error('问题不可以为空！')
      } else if (this.answer == '') {
        Message.error('答案不可以为空！')
      } else {
        const requestStr = this.content
        const url = 'https://api.decsnow.net/append-to-file';
        const encodedRequestStr = unescape(encodeURIComponent(requestStr));
        const data = btoa(encodedRequestStr);

        axios.post(url, { data: data })
          .then(response => {
            const statusCode = response.status;
            let responseText = `Response status code: ${statusCode}\n`;
            const responseBody = response.data
            responseText += `Response body: ${responseBody}`;
            console.log(responseText);
            // handle the response as needed
          })
          .catch(error => {
            console.error(`Error: ${error.message}`);
            // handle the error as needed
          });
      }
    },
  },
}
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 400px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-textarea {
  vertical-align: top;
}

#que {
  text-align: left;
  line-height: 50px;
}

#ans {
  text-align: left;
  line-height: 50px;
}

#but {
  line-height: 10px;
}

#butt {
  width: 500px;
}</style>
