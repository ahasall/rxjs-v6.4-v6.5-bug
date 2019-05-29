import { Observable } from 'rxjs';
import { BuilderOutput, BuilderOutputLike } from '@angular-devkit/architect';

let a: BuilderOutputLike;
let b: Observable<BuilderOutput>;

a = b;
