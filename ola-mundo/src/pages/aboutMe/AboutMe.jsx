import React from 'react';
import CoverPicture from '../../assets/sobre_mim_capa.png';
import PostModel from '../postModel/PostContent';

function AboutMe() {
  return (
    <PostModel
      cover={CoverPicture}
      title="Sobre Mim"
    >
      <h3>
        Conteúdo....
      </h3>
    </PostModel>
  );
}

export default AboutMe;
