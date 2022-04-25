import Banner from "./component/Banner/Banner"
import Courses from "./component/Courses/Courses";

/*
 * @Author: your name
 * @Date: 2022-04-24 22:17:29
 * @LastEditTime: 2022-04-24 23:00:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react qianduan/blog/src/container/Home/index.jsx
 * @de 首页
 */
const Home = () => {
    return (
        <div>
            <Banner />
            <Courses />
        </div>
    )
}

export default Home