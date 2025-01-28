import { Container } from '@/shared/components';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <h2>Footer content</h2>
      </Container>
    </footer>
  );
};

export default Footer;
