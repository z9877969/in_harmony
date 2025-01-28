import { Container } from '@/shared/components';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <Container>
        <h2 className={s.title}>Header content</h2>
      </Container>
    </header>
  );
};

export default Header;
