import { ApiProperty } from '@nestjs/swagger';
import { Format, Separator } from 'src/utils/types/diagram.types';

export class IGenerateDiagramPayload {
  @ApiProperty()
  typeId: string;
  @ApiProperty()
  data: {source: string, name: string, csvSeparator?: Separator};
  @ApiProperty()
  params: {
    [key: string]: any
  }[];
  @ApiProperty()
  format?: Format;
  @ApiProperty()
  excludeNull?: boolean;
}

export class IGenerateDiagramResponse {

  @ApiProperty()
  result: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  settings: IGenerateDiagramPayload;
}
