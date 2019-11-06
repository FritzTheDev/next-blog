import { Layout } from "../components";
import { Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link"

const IndexPage = () => (
  <Layout>
    {/* Margin is for the navbar */}
    <Row className="mt-4">
      <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} lg={{ span: 7, offset: 1 }} >
        <Link href={"/articles/1"} passHref>
        <a className="no-link-hover">
        <Card className="bg-black">
          <Row>
            <Col xs={{ span: 12 }} xl={{ span: 6 }}>
              <Card.Header>
                <Card.Title>
                  Start Here: Why You Need This Blog
                </Card.Title>
                <Card.Subtitle>
                  Published Nov. 6, 2019 - 0 Comments
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Hey! I'm Fritz. I have a great job working a 9-5 as a software engineer. 
                  I'm still early in my career, but I do okay for myself. I get up every weekday
                  morning at 5:30 AM to go to the gym & lift weights to keep my body in great shape.
                  <br/>
                  <br/>
                  I sound like a total prick, right? Here's the thing... 
                  I also have what was once called Asperger's Disorder. I used to be unemployed, fat & hopeless.
                  Now I'm not, and my life is infinitely better than it was.
                  <br/>
                  <br/>
                  I can show you how to hack your disability so that it works for you, not against you.
                  Jobs, Fitness, Girlfriends? I'll teach you how. Ready to get started?
                </Card.Text>
              </Card.Body>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 6 }}>
              <img width="100%" height="350px" alt="picture representing the article" src="/images/article1.jpeg" />
              <div className="button-wrapper">
                <Button  className="bg-green mt-3 mb-3" block>
                  <h3 className="text-black">Get Started</h3>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        </a>
        </Link>
      </Col>
      <Col className="display-none display-lg-2">
        test
      </Col>
    </Row>
  </Layout>
)

export default IndexPage