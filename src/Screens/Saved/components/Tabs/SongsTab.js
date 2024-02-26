import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import MediaExampleImg from "../../../../assets/MediaExampleImg.png";
import MediaExampleImg2 from "../../../../assets/MediaExampleImg2.png";
import MediaExampleImg3 from "../../../../assets/MediaExampleImg3.png";
import ArtistIcon from "../../../../assets/ArtistIcon.svg";
import { SongCard } from "../SongCard";

const songs = [
  {
    _id: "1",
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "1",
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "1",
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "1",
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "1",
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
];

export const SongsTab = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: { xs: "center", sm: "flex-start" },
        width: "100%",
        height: "100%",
        marginLeft: "-16px",
        marginTop: "-32px",
      }}
    >
      {songs.map((song) => (
        <Box
          sx={{
            maxWidth: "323px",
            maxHeight: "374px",
            height: "374px",
            width: "100%",
            flexBasis: {
              xs: "calc(100% / 1 - 16px)",
              sm: "calc(100% / 2 - 16px)",
              md: "calc(100% / 3 - 16px)",
            },
            marginLeft: "16px",
            marginTop: "32px",
          }}
        >
          <SongCard song={song} />
        </Box>
      ))}
    </Box>
  );
};
