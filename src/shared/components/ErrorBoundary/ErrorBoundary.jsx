'use client';

import React, { Component } from 'react';

import { Button, Container } from '@/shared/components';

import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <div className={styles.container}>
            <h2 className={styles.heading}>Помилка</h2>
            <p className={styles.message}>
              {this.state.error?.message || 'Щось пішло не так.'}
            </p>
            <Button className={styles.button} onClick={this.resetError}>
              Спробувати знову
            </Button>
          </div>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
