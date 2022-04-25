/*
 * @Author: your name
 * @Date: 2022-04-24 22:19:56
 * @LastEditTime: 2022-04-24 23:45:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react qianduan/blog/src/container/Home/component/Banner.jsx
 */
import styles from './style.module.scss'; 

const Courses = () => {

    const avatarImg = "https://serverless-profile-static-files.oss-cn-beijing.aliyuncs.com/images/images/avatar.png";

    return (
        <div className={styles.courses}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={avatarImg} alt="avatar" />
                    <h4 className={styles.title}>神奇宝贝训练课程</h4>
                    <p className={styles.desc}>课程从 pokemon 基本特性开始，到其性格、携带物、皮肤色泽，再到训练扩展，全面系统的梳理训练知识点</p>
                </li>
            </ul>
        </div>
    )
}

export default Courses;