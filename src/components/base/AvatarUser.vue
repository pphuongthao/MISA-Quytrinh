<template>
  <div
    class="profile-image"
    :class="this.color"
    :style="{'border-radius': '50%' }"
  >
    <span class="bold-profile">
    {{
        fullName
    }}
    </span>
  </div>
</template>

<script>
export default {
  name: "AvatarDefault",
  components: {},
  props: {
    name: {
      type: String,
      default: "",
      require: true,
    },
    userCode:{
            type: String,
        },
  },
  data() {
    return {
          color: "", // màu sắc hiển thị
          fullName : "",
    };
  },
  methods:{
      splitSpace(){
            if(this.name){
                 const s = this.name;
            this.arrayName = s.split(" ");
            this.fullName = this.arrayName[this.arrayName.length-2].charAt(0) + this.arrayName[this.arrayName.length-1].charAt(0);
            }   
        }
  },
  created(){
    this.splitSpace();
        const charLast = this.userCode.slice(-1);
        switch (charLast) {
            case "9":
                this.color = "color9";
                break;
            case "8": 
                this.color = "color8";
                break;
            case "7":
                this.color = "color7";
                break;
            case "6":
                this.color = "color6";
                break;
            case "5":
                this.color = "color5";
                break;
            case "4":
                this.color = "color4";
                break;
            case "3":
                this.color = "color3";
                break;
            case "2":
                this.color = "color2";
                break;
            case "1":
                this.color = "color1";
                break;
            case "0":
                this.color = "color0";
                break;
            default:
                break;
        }
    }
 
};
</script>

<style>
@import url(../../css/base/avatar.css);
</style>