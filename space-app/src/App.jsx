import styled from "styled-components";
import {Banner, Gallery, Global, Header, Sidebar, ZoomModal, Footer} from "/src/components";
import pictures from "/src/Pictures.json";
import {useState} from "react";

const GradiantBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const GaleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
    const [galleryImages, setGalleryImages] = useState(pictures);
    const [selectedImage, setSelectedImage] = useState(null);

    const onChangeFavorite = (picture) => {
        if (picture.id === selectedImage?.id) {
            setSelectedImage({
                ...selectedImage,
                favorite: !selectedImage.favorite
            })
        }
        setGalleryImages(galleryImages.map(galleryPicture => {
            return {
                ...galleryPicture,
                favorite: galleryPicture.id === picture.id
                    ? !picture.favorite
                    : galleryPicture.favorite
            }
        }))
    }

    return (
        <GradiantBackground>
            <Global/>
            <AppContainer>
                <Header></Header>
                <MainContainer>
                    <Sidebar/>
                    <GaleryContent>
                        <Banner
                            text="A galeria mais completa de fotos do espaço!"
                            backgroundImage="/src/assets/banner.png"
                        />
                        <Gallery
                            onSelectedImage={ image => setSelectedImage(image) }
                            onChangeFavorite={ onChangeFavorite }
                            pictures={galleryImages}
                        />
                    </GaleryContent>
                </MainContainer>
            </AppContainer>
            <ZoomModal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
                onChangeFavorite={onChangeFavorite}
            />
            <Footer/>
        </GradiantBackground>
    )
}

export default App
