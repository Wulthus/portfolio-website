import './App.css';
import { HomeSection } from './sections/home/home';

export function App() {
  return (
    <>
    <video autoPlay={true} muted loop id="background">
      <source src="earth.mp4" type='video/mp4' />
    </video>
    <HomeSection>

    </HomeSection>
    </>
  )
}