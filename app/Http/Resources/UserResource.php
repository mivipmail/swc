<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'login' => $this->login,
            'name' => $this->name,
            'surname' => $this->surname,
            'birthday' => $this->birthday ? (new Carbon($this->birthday))->format("d.m.Y") : null,
            'created_at' => (new Carbon($this->created_at))->format("d.m.Y"),
        ];
    }
}
