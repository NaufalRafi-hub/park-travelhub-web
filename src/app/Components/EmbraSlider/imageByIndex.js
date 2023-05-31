// import image1 from './images/tennis.png'
// import image2 from './images/golf.png'
// import image3 from './images/yoga.png'
// import image4 from './images/biking.png'
import image1 from '../../../../public/tennis.png'
import image2 from '../../../../public/golf.png'
import image3 from '../../../../public/yoga.png'
import image4 from '../../../../public/biking.png'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
