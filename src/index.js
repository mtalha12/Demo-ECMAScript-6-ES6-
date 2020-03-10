import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import DeclaredVariables from './components/varLetConst';
import { BlockScoping } from './components/BlockScoping';
import { ArrowFunction } from './components/ArrowFunction';
import { RestAndSpreadParameters } from './components/Rest&Spread';
import { ObjectLiteralExtensionsFunction } from './components/ObjectLiteralExtensions';
import { ForOfLoopFunction } from './components/ForOfLoop';
import { TemplateOctalAndBinaryLiteralsFunction } from './components/TemplateOctalAndBinaryLiterals';
import { DestructuringFunction } from './components/Destructuring';
import { QuerySelector } from './components/QuerySelector';
import { NewStringMethod } from './components/NewStringMethod';
import { IterableAndLooping } from './components/IterableAndLooping';
import { BuildInArrayFunction } from './components/BuildInArrayFunctions';
import { Promises } from './components/Promises';
import { BuildMyOwnPromise } from './components/BuildingYourOwnPromise';

ReactDOM.render(<BuildMyOwnPromise />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
