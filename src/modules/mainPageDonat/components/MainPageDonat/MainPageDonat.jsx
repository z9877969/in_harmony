import {
  Container,
  FormWithSumButtons,
  SectionTitle,
} from '@/shared/components';

// import s from './MainPageDonat.module.scss';

const MainPageDonat = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="MainPageDonat" />
        <FormWithSumButtons />
      </Container>
    </section>
  );
};

export default MainPageDonat;
