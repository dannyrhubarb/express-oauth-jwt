/*
 *  Copyright 2020 Curity AB
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { RequestHandler } from "express";
import {FlattenedJWSInput, GetKeyFunction, JWSHeaderParameters} from "jose/dist/types/types";


declare namespace errors {
    class InsufficientScopeError extends Error {
        constructor();
    }
    class TokenClaimsError extends Error {
        constructor();
    }
}

interface Claim {
    name: string;
    value?: string;
}

interface Options {
    claims?: Claim[];
    scope?: string[];
}

declare function secure(getKey: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>, options?: Options): RequestHandler;
export { secure, errors, Claim, Options };
