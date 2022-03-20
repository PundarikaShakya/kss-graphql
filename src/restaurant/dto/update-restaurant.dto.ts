import { ObjectType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';

@ObjectType()
export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {}
