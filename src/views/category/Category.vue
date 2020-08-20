<template>
    <!-- <div>菜单</div> -->
    <div id="wrapper">
        <ul id="content">
            <li>表格1</li>
            <li>表格2</li>
            <li>表格3</li>
            <li>表格4</li>
            <li>表格5</li>
            <li>表格6</li>
            <li>表格7</li>
            <li>表格8</li>
            <li>表格9</li>
            <li>表格10</li>
            <li>表格11</li>
            <li>表格12</li>
            <li>表格13</li>
            <li>表格14</li>
            <li>表格15</li>
            <li>表格16</li>
            <li>表格17</li>
            <li>表格18</li>
            <li>表格19</li>
            <li>表格20</li>
            <li>表格21</li>
            <li>表格22</li>
            <li>表格23</li>
            <li>表格24</li>
            <li>表格25</li>
            <li>表格26</li>
            <li>表格27</li>
            <li>表格28</li>
            <li>表格29</li>
            <li>表格30</li>
            <li>表格31</li>
            <li>表格32</li>
            <li>表格33</li>
            <li>表格34</li>
            <li>表格35</li>
            <li>表格36</li>
            <li>表格37</li>
            <li>表格38</li>
            <li>表格39</li>
            <li>表格40</li>
            <li>表格41</li>
            <li>表格42</li>
            <li>表格43</li>
            <li>表格44</li>
            <li>表格45</li>
            <li>表格46</li>
            <li>表格47</li>
            <li>表格48</li>
            <li>表格49</li>
            <li>表格50</li>
            <li>表格51</li>
            <li>表格52</li>
            <li>表格53</li>
            <li>表格54</li>
            <li>表格55</li>
            <li>表格56</li>
            <li>表格57</li>
            <li>表格58</li>
            <li>表格59</li>
            <li>表格60</li>
            <li>表格61</li>
            <li>表格62</li>
            <li>表格63</li>
            <li>表格64</li>
            <li>表格65</li>
            <li>表格66</li>
            <li>表格67</li>
            <li>表格68</li>
            <li>表格69</li>
            <li>表格70</li>
            <li>表格71</li>
            <li>表格72</li>
            <li>表格73</li>
            <li>表格74</li>
            <li>表格75</li>
            <li>表格76</li>
            <li>表格77</li>
            <li>表格78</li>
            <li>表格79</li>
            <li>表格80</li>
            <li>表格81</li>
            <li>表格82</li>
            <li>表格83</li>
            <li>表格84</li>
            <li>表格85</li>
            <li>表格86</li>
            <li>表格87</li>
            <li>表格88</li>
            <li>表格89</li>
            <li>表格90</li>
            <li>表格91</li>
            <li>表格92</li>
            <li>表格93</li>
            <li>表格94</li>
            <li>表格95</li>
            <li>表格96</li>
            <li>表格97</li>
            <li>表格98</li>
            <li>表格99</li>
            <li>表格100</li>
        </ul>
    </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "Category",
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll('#wrapper', {
            probeType: 3,
            pullUpLoad: true,
        }),
            this.scroll.on('scroll', (position) => {
                // console.log(position)
            }),
            this.scroll.on('pullingUp', () => {
                console.log('上拉底部加载更多')
                //模拟网络请求，可以上拉加载多次
                setTimeout(() => {
                    this.scroll.finishPullUp()
                }, 2000)
            })
    },
}
</script>

<style scoped>
#wrapper {
    height: 200px;
    overflow: hidden;
}
</style>