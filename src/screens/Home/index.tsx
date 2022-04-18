import React, { useState } from "react";

import { Button } from "../../components/Button";
import { Container, Content, Header, Number, Title} from './styles'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      
      <Title>
        COUNT
      </Title>

      <Header>
        <Number>
          {count}
        </Number>
      </Header>


      <Content>
        <Button 
          title="+"
          onPress={() => setCount(count + 1)}
        />

        <Button 
          title="-"
          onPress={() => setCount(count - 1)}
        />
      </Content> 
    </Container>
  )
  } 
