import React from "react";
import { Grid, Icon, Input, Button } from "semantic-ui-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.topBox}>
        <div className={styles.topContainer}>
          <Grid styles={{ width: "80%" }}>
            <Grid.Row columns={8}>
              
              <Grid.Column>
                <div className={styles.sponser}>
                  <span style={{ fontSize: "20px" }}>coinbase</span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                  <span style={{ fontSize: "20px" }}>andreessen</span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                  <span style={{ fontSize: "20px" }}>Paradigm</span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                  <span style={{ fontSize: "20px" }}>YCombinator</span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                  <span style={{ fontSize: "20px" }}>COATUE</span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                  <span style={{ fontSize: "20px"}}>FOUNDERS</span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={styles.sponser}>
                  <span style={{ fontSize: "20px"}}>BLOCKCHAIN CAPITAL</span>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    
         
        
      
    </>
  );
}
