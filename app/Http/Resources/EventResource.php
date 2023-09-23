<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserEventResource;
use Carbon\Carbon;

class EventResource extends JsonResource
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
            'title' => $this->title,
            'content' => $this->content,
            'creator_user' => new UserEventResource($this->creatorUser),
            // 'creator_user' => [
            //     'id' => $this->creatorUser->id,
            //     'name' => $this->creatorUser->name,
            //     'surname' => $this->creatorUser->surname,
            // ],
            'member_users' => UserEventResource::collection($this->memberUsers),
            'created_at' => (new Carbon($this->created_at))->format("d.m.Y"),
        ];
    }
}
