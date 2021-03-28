import React, { useEffect } from 'react';
import { Header, Image, Table } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';

const { CREATE_VETERINARY } = require('../../../../provider/graphql/queries/veterinary');

const TableExampleCollapsing = () => {
  const [addVeterinary, { data, error, loading }] = useMutation(CREATE_VETERINARY, { errorPolicy: 'all' });

  useEffect(() => {
    console.log({ data });
    console.log({ error });
    console.log({ loading });
  }, [data, error, loading]);

  return (
    <>
      <button type="button" onClick={() => addVeterinary()}>Agregar vete</button>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              Domicilio
            </Table.HeaderCell>
            <Table.HeaderCell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              Mascotas
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <Header as="h5" image>
                <Image src="/img/avatar/emmet-brown.jpg" avatar size="mini" />
                <Header.Content>
                  Emmet brown
                  <Header.Subheader>dr.emmet.brown@gmail.com</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <Header as="h6" image>
                <Header.Content>
                  Calle Santa Rosa, 01726
                  <Header.Subheader>RM. Puente Alto</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <Header as="h4" image>
                <Image src="/img/avatar/marty-mcfly.jpg" avatar size="mini" />
                <Header.Content>
                  Marty Mcfly
                  <Header.Subheader>xMartyx@gmail.com</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              15
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <Header as="h4" image>
                <Image src="/img/avatar/george-mcfly.jpg" avatar size="mini" />
                <Header.Content>
                  George Mcfly
                  <Header.Subheader>george_78@gmail.com</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              12
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <Header as="h4" image>
                <Image src="/img/avatar/tony-stark.jpeg" avatar size="mini" />
                <Header.Content>
                  Antony Stark
                  <Header.Subheader>to√±itostark@gmail.com</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              11
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default TableExampleCollapsing;
