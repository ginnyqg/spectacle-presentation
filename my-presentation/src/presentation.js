// 5800 Presentation Ginny
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Layout,
  Markdown,
  Fill,
  Image,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'lightpink',
    secondary: 'black',
    tertiary: 'white',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Axon Pharma X55 Initiative
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="2em" bold>
            - a new way to test drug
          </Text>
          <Text margin="10px 0 0" textSize="1em">
            Chief Analytics Office: Ginny Gao
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="#3fa1b5">
          <Heading size={1} caps bold lineHeight={1} textColor="white">
            40%
          </Heading>
          <Text textSize="1.5em" caps textColor="white">
            of people over 65 experience some level of memory impairment
          </Text>  
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={"https://raw.githubusercontent.com/ginnyqg/spectacle-presentation/master/my-presentation/images/joe_jenna.png"}>
        </Slide>
        <Slide transition={["slide"]}>
          <Text textSize="2em" textColor="white" bold textAlign="left">
            Red &amp; Kitty
          </Text>
          <Appear fid="1">
            <Text margin="20px 0 0" textSize="1.2em" bold textColor="secondary" textAlign="left">
              Married for 30 years, Red had never forgotten a single important day with his wife Kitty
            </Text>
          </Appear>
          <Appear fid="2">
            <Text margin="10px 0 0" textSize="1.2em" bold textColor="tertiary"  textAlign="left">
              Kitty started noticing Red couldn't remember their favorite vacation spots
            </Text>
          </Appear>
          <Appear fid="3">
            <Text margin="10px 0 0" textSize="1.2em" bold textColor="secondary" textAlign="left">
              Which sports team to cheer?
            </Text>
          </Appear>
          <Appear fid="4">
            <Text margin="10px 0 0" textSize="1.2em" bold textColor="tertiary" textAlign="left">
              Now her birthday...
            </Text>
          </Appear> 
          <iframe src="https://giphy.com/embed/En1h3aR13nlte" width="320" height="220" frameBorder="0" class="giphy-embed" align="right"></iframe>          
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <BlockQuote>
            <Quote textSize="2em">Bringing the best experience to our patients in their journey of achieving better health.
            </Quote>
            <Cite>AP Mission</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["spin", "zoom"]} bgColor="tertiary">
          <Heading caps fit size={1} textColor="primary">
            AP’s X55 Initiative
          </Heading>
          <Text margin="10px 0 0" textSize="1em" textColor="secondary">
            X55 is believed can enhance patients' memory by 20% by the end of 6 consecutive months’ usage (R&amp;D)  
          </Text>
          <Text margin="30px 0 0" textSize="1.5em" bold textAlign="left" textColor="secondary">
            Teams involved
          </Text>  
          <Layout>
            <Appear>      
              <List>
                <ListItem textSize="1em">Analytics</ListItem>
                <ListItem textSize="1em">R&D</ListItem>
                <ListItem textSize="1em">Marketing</ListItem>
                <ListItem textSize="1em">IT</ListItem>
                <ListItem textSize="1em">Product</ListItem>
                <ListItem textSize="1em">Patient Care</ListItem>            
              </List> 
            </Appear>            
            <Image src={"https://raw.githubusercontent.com/ginnyqg/spectacle-presentation/master/my-presentation/images/brain.png"} height="230px" margin="auto auto auto 400px"/>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps size={4}>AP Analytics</Heading>
          <Heading size={6}>
            Creates a modern and accessible memory recovery experience with
          </Heading>
          <Heading size={6} textColor="tertiary">
            AI and technology
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={"https://raw.githubusercontent.com/ginnyqg/spectacle-presentation/master/my-presentation/images/test_group.png"} bgDarken={0.75} textColor="primary">
          <Text textAlign="left" textSize="2em" textColor="tertiary" bold>
            AP Analytics Team
          </Text>
          <List>
            <Appear>
              <ListItem margin="60px 0 0" textColor="tertiary" bold>Length of initiative: 9 - 12 months</ListItem>
            </Appear>
            <Appear>
              <ListItem>5 dosage, 3 purity, 6 demographic levels</ListItem>
            </Appear>
            <Appear>
              <ListItem>1 control group for comparison</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="tertiary" bold>Memory diagnosis</ListItem>
            </Appear>
            <Appear>
              <ListItem>Before, every quarter, after</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={"https://raw.githubusercontent.com/ginnyqg/spectacle-presentation/master/my-presentation/images/process.png"}>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgImage={"https://raw.githubusercontent.com/ginnyqg/spectacle-presentation/master/my-presentation/images/outcome.png"}>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Text textAlign="left" textSize="2em" textColor="primary" bold>
            Need your support
          </Text>
          <List>
            <Appear>
              <ListItem textSize="1em" textColor="black" bold>Estimated cost from AP Analytics: 300K</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" textColor="black">Staff, equipment, tools, event, meeting</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" textColor="black" bold>Follow our journey, share our innovations through news, social media, events</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" textColor="black">WWW.AP.COM/ANALYTICS/X55, Follw us: #APAIX55</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" textColor="black" bold>Follow Red’s progress of recovery, help more families like Red and Kitty</ListItem>
            </Appear>
          </List>
          <iframe src="https://giphy.com/embed/SKfxAmcCza9fq" width="400" height="180" frameBorder="0" class="giphy-embed" align="right"></iframe>
        </Slide>
      </Deck>
    );
  }
}
