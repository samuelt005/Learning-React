import PropTypes from "prop-types";
import Image from "../gallery/image/Image.jsx";
import styled from "styled-components";
import {ButtonIcon} from "../Index.jsx";

const Overlay = styled.div`
  background-color: rgba(42, 39, 51, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  position: absolute;
  top: 115px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1000px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }  
`;

const ZoomModal = ({ image, onClose, onChangeFavorite }) => {
    return (
        <>
            {image &&
                <Overlay>
                    <StyledDialog open={!!image} onClose={onClose}>
                        <Image picture={image} expanded={true} onChangeFavorite={onChangeFavorite} />
                        <form method="dialog">
                            <ButtonIcon   formMethod="dialog">
                                < img src="/icons/fechar.png" alt="Icone de fechar" />
                            </ButtonIcon>
                        </form>
                    </StyledDialog>
                </Overlay>
            }
        </>
    )
}

ZoomModal.propTypes = {
    image: PropTypes.object,
    onClose: PropTypes.func,
    onChangeFavorite: PropTypes.func
}

export default ZoomModal