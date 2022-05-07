import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { HeaderDashboard } from '@components/dashboard/HeaderDashboard';
<<<<<<< HEAD:src/components/myfeelingspage/AddFeelings.tsx
import { darkModeState } from '@store';
import { AddFeelingsChoices } from './AddFeelingsChoices';
=======
import { AddFeelingsChoices } from './AddFeelingsChoices';
import { darkModeState } from '@store';
>>>>>>> main:src/components/myfeelingspage/AddFeelings.jsx

import '@translations/i18n';
import './AddFeelingsPage.scss';

export function AddFeelings() {
  const darkModeStatus = useRecoilValue(darkModeState);
  const { t } = useTranslation();

  return (
    <div>
      <Container fluid>
        <Row>
          <HeaderDashboard />
        </Row>
        <Row>
          <Col>
            <h3 className={darkModeStatus ? 'my-feelings-font-dark' : 'my-feelings-font-light'}>{t('feelingsmessage')}</h3>
            <AddFeelingsChoices />
          </Col>
          <Col sm={1} />
        </Row>
      </Container>
    </div>
  );
}
