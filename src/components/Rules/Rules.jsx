import React, { useState } from 'react';
import * as Styled from './RulesStyle';
import rulesImage from '../../images/image-rules.svg';

function Rules() {
  const [displayRules, setDisplayRules] = useState(false);

  return (
    <Styled.Rules>
      <Styled.RulesButton onClick={() => setDisplayRules(!displayRules)}>
        Rules
      </Styled.RulesButton>
      <Styled.RulesInfo displayRules={displayRules}>
        <Styled.RulesInfoTitle>Rules</Styled.RulesInfoTitle>
        <Styled.RulesInfoImage src={rulesImage} />
        <Styled.CloseRules onClick={() => setDisplayRules(!displayRules)}>
          &#10006;
        </Styled.CloseRules>
      </Styled.RulesInfo>
    </Styled.Rules>
  );
}

export default Rules;
