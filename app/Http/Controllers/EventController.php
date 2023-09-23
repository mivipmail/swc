<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Http\Resources\EventResource;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return [
                'result' => EventResource::collection(Event::all()),
                'error' => null,
            ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }

    public function follow($id)
    {
        try {
            $event = Event::find($id);
            if(!$event)
                return [
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ];

            $event->memberUsers()->attach(auth()->user()->id);
            $event->refresh();
            return [
                'result' => new EventResource($event),
                'error' => null,
            ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }

    public function unfollow($id)
    {
        try {
            $event = Event::find($id);
            if(!$event)
                return [
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ];

            $event->memberUsers()->detach(auth()->user()->id);
            $event->refresh();
            return [
                'result' => new EventResource($event),
                'error' => null,
            ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }

    public function store(Request $request)
    {
        try {
            $data = $request->all();

            $event = Event::create([
                'title' => $data['title'],
                'content' => $data['content'],
                'user_id' => $data['user_id'],
            ]);

            return [
                'result' => new EventResource($event),
                'error' => null,
            ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }

    public function show($id)
    {
        try {
            $event = Event::find($id);

            if($event) 
                return [
                    'result' => new EventResource($event),
                    'error' => null,
                ];
            else
                return [
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }

    public function update(Request $request, Event $event)
    {
        //
    }

    public function destroy($id)
    {
        try {
            $event = Event::find($id);
            if(!$event)
                return [
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ];

            $event->delete();
            
            return [
                'result' => 'Ok',
                'error' => null,
            ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }
}
