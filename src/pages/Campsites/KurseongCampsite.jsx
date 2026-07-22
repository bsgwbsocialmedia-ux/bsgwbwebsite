import React from 'react';
import InnerPageLayout from '../../components/Layout/InnerPageLayout';
import CampsiteDetail from './CampsiteDetail';
import { CAMPSITES } from './campsitesData';

export default function KurseongCampsite() {
  return (
    <InnerPageLayout>
      <CampsiteDetail campsite={CAMPSITES.kurseong} />
    </InnerPageLayout>
  );
}