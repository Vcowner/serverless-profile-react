/*
 * @Author: your name
 * @Date: 2022-04-24 22:19:56
 * @LastEditTime: 2022-04-24 23:44:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react qianduan/blog/src/container/Home/component/Banner.jsx
 */
import styles from './style.module.scss'; 

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.person}>
                <img className={styles.avatar} src="https://serverless-profile-static-files.oss-cn-beijing.aliyuncs.com/images/images/avatar.png" alt="avatar" />
                <div className={styles.title}>title</div>
                <div className={styles.desc}>desc</div>
            </div>
        </div>
    )
}

export default Banner;