export class CreateManagerDto {
  readonly firstName: string;
  readonly lastName: number;
  readonly position: string;
  // subordinates:[{type: mongoose.Schema.ObjectId, ref: 'Employee'}],
  //   reports:[{type: mongoose.Schema.Types.ObjectId, ref:'Report'}],
  //   tasks:[{type: mongoose.Schema.ObjectId , ref:'Task'}]
}
