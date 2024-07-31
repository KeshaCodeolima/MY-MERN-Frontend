import React from 'react';
import './HomePage.css';
import Image1 from '../../Image/SUIBG1.jpg';
import Image2 from '../../Image/IBG5.jpg';
import Image3 from '../../Image/IBG6.jpg';
import Image4 from '../../Image/IBG7.jpg';


function HomePage(){
    return(
        <>
        <div>
            <h1>WELCOME To Sri Lanka</h1>
        </div>

        <div className='subimg1'>
            <div className="hovertext">
                <img src={Image1}  alt='Background' className='IMG'/>
                <div className="text1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugiat molestiae velit, ad blanditiis tempore vitae possimus magni maiores a! Aperiam corporis, dolorum aliquid officia suscipit nam perspiciatis quia possimus natus harum saepe quos molestias perferendis velit fugiat ipsam repudiandae, excepturi alias quod laboriosam unde? Eos incidunt aut earum suscipit, nulla sed amet placeat? Cupiditate esse in nam minus architecto rerum distinctio quos voluptatem quod accusantium officiis sunt, aliquam reprehenderit vel error natus suscipit officia quis doloribus, eligendi inventore. Quas ratione ad alias, deleniti vero quo, soluta nihil laudantium non quae magni corrupti praesentium voluptatibus asperiores hic ipsa deserunt et!</p>
                </div>
            </div>
            <div className="hovertext">
                <img src={Image2}  alt='Background' className='IMG'/>
                <div className="text1">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, ullam! Tempore magnam omnis illo amet laudantium, natus consequatur ipsa nisi. In amet quo, facere accusantium quam quos incidunt! Maxime et dolorum consectetur nobis commodi, error distinctio odio dolor amet, unde ipsum consequuntur asperiores aut qui! Aliquam quidem maxime veritatis eveniet beatae ducimus eaque, ad ex. Dolorem quia, explicabo dolorum delectus aspernatur itaque eos enim quos. Voluptas vitae officiis non sed quaerat suscipit a sequi perspiciatis! Sunt praesentium eum voluptates temporibus, perspiciatis cumque neque atque repellat fugiat animi ducimus id vero, cum nemo sapiente harum eos aliquam, non blanditiis facilis illum. Quam nesciunt, accusamus quia modi id commodi a veniam ullam perferendis consequuntur animi mollitia nisi accusantium laudantium. Tempore, velit placeat!</p>
                </div>
            </div>

            <div className="hovertext">
                <img src={Image3}  alt='Background' className='IMG'/>
                <div className="text1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora voluptas necessitatibus nihil. Labore laborum corrupti officiis ea qui nihil obcaecati eligendi amet? Consequatur illo quidem quisquam, suscipit ullam eaque exercitationem deleniti soluta doloremque facere, dolores totam. Aut placeat illum quaerat inventore suscipit minima ea illo nesciunt, similique beatae voluptates harum cumque ducimus, iste excepturi soluta quibusdam quam tempora id tenetur quidem quasi! Ut laboriosam veniam, amet eaque molestias repellat vitae ex explicabo omnis odio, earum distinctio, dolorem pariatur? Saepe, eius numquam voluptate asperiores consectetur omnis enim vero aliquid cupiditate odio quam delectus, dolorem accusantium, commodi eum sequi ex. Minus.</p>
                </div>
            </div>

            <div className="hovertext">
                <img src={Image4}  alt='Background' className='IMG'/>
                <div className="text1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos eos unde accusamus voluptatem deserunt beatae atque placeat nulla commodi neque vel, nemo earum eius omnis officiis? Ab ea facilis quod mollitia distinctio dolorem quis veniam, saepe corrupti earum voluptates, quae maiores hic. Dolores magni magnam, tenetur placeat perferendis ab at amet optio debitis sequi porro necessitatibus quod molestias vero ipsum voluptate doloribus explicabo hic! Maiores sed porro aliquid voluptatem nulla! Similique ducimus sit illo praesentium totam reiciendis dolorum voluptate neque commodi, non enim voluptas voluptatibus eligendi, magnam mollitia cupiditate molestias suscipit fugiat nam quidem itaque ex quo deleniti. Eligendi, saepe. Eligendi aliquam harum et perspiciatis minus minima vel magnam aliquid, cum adipisci soluta, consequatur consequuntur quos accusantium. Incidunt, aspernatur? Impedit omnis repellendus iure! Obcaecati dolorum maxime dolorem maiores facere error ea hic, animi accusantium illo ullam accusamus sint non.</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default HomePage