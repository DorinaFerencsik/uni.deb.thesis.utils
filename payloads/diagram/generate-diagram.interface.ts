import { Format, Separator } from 'src/utils/types/diagram.types';
import { ApiProperty } from '@nestjs/swagger';

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
}

export class IGenerateDiagramResponse {
  
  @ApiProperty()
  result: string;
  
  
  @ApiProperty()
  source: string;

  @ApiProperty()
  settings: IGenerateDiagramPayload;
}
