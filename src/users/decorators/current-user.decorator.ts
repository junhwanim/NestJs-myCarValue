import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    request.session.userId;
    return request.currentUser;
  },
);
