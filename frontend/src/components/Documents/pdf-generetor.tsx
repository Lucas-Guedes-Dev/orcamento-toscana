import React from 'react';
import { Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});

interface PropsPage{
    ola?: string;
}

export const DocumentRender: React.FC<PropsPage> = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.backgroundImage} src='src/assets/fundo-moc.jpg'/>
      {/* <View style={styles.section}>
        <Text>{props.ola}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
);